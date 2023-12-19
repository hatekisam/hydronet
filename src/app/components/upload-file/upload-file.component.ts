import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  template: `
    <div for="fileInput" class="upload-box  gap-2  p-8 flex items-center justify-center my-2" (click)="fileInput.click()">
      <input
        type="file"
        id="fileInput"
        #fileInput
        (change)="onFileSelected($event)"
      />
      <img src="../../../assets/upload.svg" alt="" />
      <div class="upload-text">{{ fileName || 'Upload Additional file' }}</div>
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
        color:#8E8E8E;
      }

      input[type='file'] {
        display: none;
      }
    `,
  ],
})
export class UploadFileComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileName: string | null = null;

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.fileName = files[0].name;
    }
  }
}
