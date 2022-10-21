# CKEditor 5

## docs

[Vue.js 3+ rich text editor component](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/vuejs-v3.html#using-es6-modules)

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

## preview

<script setup>
import ckeditor5 from './ckeditor5.vue'
</script>
<ckeditor5/>
