# CKEditor 5

## install

-   step1

```shell
npm install --save @ckeditor/ckeditor5-vue
                   @ckeditor/ckeditor5-build-classic
```

-   step2

```ts
import { createApp } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'

createApp().use(CKEditor).mount('#app')
```

-   step3

```vue
<script setup lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
const editorData = ref('<p>Content of the editor.</p>')
const editorConfig = ref({})
</script>

<template>
    <div>
        <ckeditor
            :editor="ClassicEditor"
            v-model="editorData"
            :config="editorConfig"
        ></ckeditor>
    </div>
</template>
```
