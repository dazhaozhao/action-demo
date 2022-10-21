<script setup lang="ts">
import Ckeditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref } from 'vue'
const editorData = ref(`
<h1>The three greatest things you learn from traveling</h1>

Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.

<figure class="image ck-widget image_resized image-style-align-right ck-widget_with-resizer ck-widget_selected" style="width:50%;" contenteditable="false" draggable="true"><img src="https://ckeditor.com/assets/images/bg/volcano-8967c4575e.jpg" alt="Man climbing a mountain."><figcaption class="ck-editor__editable ck-editor__nested-editable" data-placeholder="Enter image caption" role="textbox" aria-label="Caption for image: Man climbing a mountain." contenteditable="true">Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption><div class="ck ck-reset_all ck-widget__type-around"><div class="ck ck-widget__type-around__button ck-widget__type-around__button_before" title="Insert paragraph before block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__button ck-widget__type-around__button_after" title="Insert paragraph after block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__fake-caret"></div></div><div class="ck ck-reset_all ck-widget__resizer" style="height:250px;left:0px;top:0px;width:375px;"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view" style="display: none;"></div></div></figure>

<h2>Appreciation of diversity</h2>

Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.

The real voyage of discovery consists not in seeking new landscapes, but having new eyes.

Marcel Proust

<h2>Improvisation</h2>

Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you're left with your improvising skills. You learn to adapt as you go. Here's how my travel checklist looks now:



 buy the ticket


 start your adventure

<h2>Confidence</h2>

Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.`)
const editorConfig = ref({})
</script>

<template>
    <div>
        <Ckeditor.component
            :editor="ClassicEditor"
            v-model="editorData"
            :config="editorConfig"
        ></Ckeditor.component>
    </div>
</template>
