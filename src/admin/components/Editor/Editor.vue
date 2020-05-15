<template>
  <v-md-editor
    v-model="content"
    :theme="theme"
    :toolbar="toolbar"
    :include-level="[1,2,3,4]"
    :disabled-menus="[]"
    :upload-image-config="uploadImageConfig"
    @upload-image="handleUploadImage"
    @save="saveContentText"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr emoji todo-list | userToc tip link image code | save"
    :height="height">
  </v-md-editor>
</template>

<script>
  import {uploadArticleContentImg} from "../../api";
  import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor'
  import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
  import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-java';
  import 'prismjs/components/prism-c';



  export default {
    name: "Editor",
    components:{[VMdEditor.name]: VMdEditor},
    data(){
      return{
        theme:vuepressTheme,
        content:this.value,
        uploadImageConfig: { accept: 'image/*' },
        toolbar: {
          userToc: {//自定义的插入目录的菜单
            title: '插入目录',
            icon: 'el-icon-s-unfold',
            action(editor) {
              editor.insert(function (selected) {
                const prefix = '[[';
                const suffix = ']]';
                const placeholder = 'TOC';
                const content = selected || placeholder;
                return {
                  text: `${prefix}${content}${suffix}`,
                  selected: content,
                };
              });
            },
          },
        }
      }
    },
    props:{
      height:{
        type: String,
        default: "500px"
      },
      value:{
        type: String,
        default: "请开始你的表演"
      },
    },
    methods:{
      handleUploadImage (event, insertImage) {
        let formData =  new FormData()
        const { files } = event.target;
        formData.append('file',files[0])
        // 拿到 File 对象之后上传到文件服务器，然后向编辑框中插入对应的内容
        uploadArticleContentImg(formData)
          .then(res=>{
            if(res.data.code===200){
              this.$message.success('图片上传成功');
              insertImage({
                url: res.data.datas[0].filepath,
                desc: '图片描述',
              })
            }else {
              throw new Error("图片上传失败")
            }
          })
          .catch(()=>{
            this.$message.error('图片上传失败');
          })
      },
      saveContentText(text,html){
        this.$emit('save', text,html)
      }
    },
    mounted() {},
    watch:{
      content:function (newValue) {
        this.$emit('input',newValue);
        this.$emit('on-change',newValue);
      }
    }
  }
</script>

<style scoped>

</style>
