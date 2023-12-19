import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  template: `
    <div for="fileInput" class="upload-box" (click)="fileInput.click()">
      <input
        type="file"
        id="fileInput"
        #fileInput
        (change)="onFileSelected($event)"
      />
      <div class="upload-icon">📂</div>
      <div class="upload-text">{{ fileName || 'Click to select a file' }}</div>
    </div>
  `,
  styles: [
    `
      .upload-box {
        border: 2px dashed #ccc;
        text-align: center;
        cursor: pointer;
      }

      .upload-icon {
        font-size: 24px;
        margin-bottom: 10px;
      }

      .upload-text {
        color: #888;
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
