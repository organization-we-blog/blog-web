<template>
  <v-md-editor
    v-model="content"
    :toolbar="toolbar"
    :disabled-menus="[]"
    :upload-image-config="uploadImageConfig"
    @upload-image="handleUploadImage"
    @save="saveContentText"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | usertoc tip link image code | save"
    :height="height">
  </v-md-editor>
</template>

<script>
    import {uploaImg} from "../../api";

    export default {
        name: "Editor",
      data(){
          return{
            content:this.defaultContent,
            uploadImageConfig: { accept: 'image/*' },
            toolbar: {
              usertoc: {//自定义的插入目录的菜单
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
        defaultContent:{
          type: String,
          default: "请开始你的表演"
        },
      },
      methods:{
        handleUploadImage (event, insertImage) {
          let formdata =  new FormData()
          const { files } = event.target;
          formdata.append('file',files[0])
          // 拿到 File 对象之后上传到文件服务器，然后向编辑框中插入对应的内容
          uploaImg(formdata)
            .then(res=>{
              if(res.data.code===1){
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
      }
    }
</script>

<style scoped>

</style>
