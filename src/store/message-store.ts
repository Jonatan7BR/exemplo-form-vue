import { defineStore } from "pinia";
import { ref } from "vue";

export enum MessageType {
  Success = "success",
  Error = "error",
}

export const useMessageStore = defineStore("message", () => {
  const message = ref("");
  const messageType = ref(MessageType.Success);
  const messageVisible = ref(false);

  const showMessage = (
    msg: string,
    msgType: MessageType = MessageType.Success,
  ) => {
    message.value = msg;
    messageType.value = msgType;
    messageVisible.value = true;
  };

  const hideMessage = () => {
    messageVisible.value = false;
  };

  return { message, messageType, messageVisible, showMessage, hideMessage };
});
