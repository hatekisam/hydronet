import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload2-file',
  standalone: true,
  imports: [],
  template: `
    <div
      for="fileInput"
      class="upload-box  gap-2  px-5 py-4 flex items-center justify-center my-2"
    >
      <input
        type="file"
        id="fileInput"
        #fileInput
        (change)="onFileSelected($event)"
      />
      <img src="../../../assets/upload2.svg" alt="" class="w-5 h-5" />
      <div>
        <p class="text-[#1F2937] text-sm">Select a file or drag and drop here</p>
        <p class="text-[#9CA3AF] text-[10px]">
          JPG, PNG or PDF, file size no more than 10MB
        </p>
      </div>
      <button
        (click)="fileInput.click()"
        class="bg-[#1976D2] text-white p-2 rounded-md text-xs"
      >
        SELECT FILE
      </button>
    </div>
  `,
  styles: [
    `
      .upload-box {
        border: 2px dashed #ccc;
        text-align: center;
        cursor: pointer;
        border-radius: 10px;
      }

      .upload-icon {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .upload-text {
        color: #8e8e8e;
      }

      input[type='file'] {
        display: none;
      }
    `,
  ],
})
export class Upload2Component {
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileName: string | null = null;

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.fileName = files[0].name;
    }
  }
}
