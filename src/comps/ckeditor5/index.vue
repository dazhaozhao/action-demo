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
