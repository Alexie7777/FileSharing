<template>
  <n-card title="Alex7777" hoverable
    ><n-space vertical>
      <n-upload
        multiple
        action="https://file-sharing-app-7777.herokuapp.com/upload"
        ref="upload"
        name="file"
        :data="inputValue"
        :default-upload="false"
        @change="handleChange"
        @finish="handleFinish"
      >
        <n-upload-dragger>
          <div style="margin-bottom: 12px">
            <n-icon size="48" :depth="3">
              <archive-icon />
            </n-icon>
          </div>
          <n-text style="font-size: 16px">
            点击或者拖动文件到该区域来上传
          </n-text>
          <n-p depth="3" style="margin: 8px 0 0 0">
            请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
          </n-p>
        </n-upload-dragger>
      </n-upload>
      <n-h3></n-h3>
      <n-input
        type="password"
        v-model:value="inputValue.password"
        placeholder="或许可以再来点加密..."
        clearable
      ></n-input>
      <n-space justify="center"
        ><n-button
          :disabled="!fileListLength"
          style="margin-bottom: 12px"
          @click="handleClick"
        >
          上传文件
        </n-button></n-space
      >
    </n-space></n-card
  >
</template>

<script setup lang="ts">
import { onMounted, onUpdated, reactive, ref } from "vue";
import type { UploadInst, UploadFileInfo } from "naive-ui";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { useRouter } from "vue-router";

const inputValue = ref({
  password: "",
});
const Router = useRouter();
const fileListLength = ref(0);
const upload = ref<UploadInst | null>(null);

function handleChange(options: { fileList: UploadFileInfo[] }) {
  fileListLength.value = options.fileList.length;
}

function handleClick() {
  upload.value?.submit();
}

const handleFinish = ({
  file,
  event,
}: {
  file: UploadFileInfo;
  event?: ProgressEvent;
}) => {
  const res = JSON.parse((event?.target as XMLHttpRequest).response);
  console.log(res);
  Router.push({
    name: "UploadView",
    query: { fileLink: res._id, fileName: file.name },
  });
};
</script>

<style scoped>
.n-card {
  max-width: 64rem;
}
</style>
