import { FileInput, Label } from 'flowbite-react';

export default function FileUpload() {
  return (
    <div
      className="max-w-md"
      id="fileUpload"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="imgcomprobante"
          value="Upload file"
        />
      </div>
      <FileInput
        helperText=" seleccione una imagen o pdf "
        id="imgcomprobante"
      />
    </div>
  )
}