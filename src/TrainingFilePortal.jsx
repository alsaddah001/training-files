import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const traineeFiles = {
  "1129966758": "YOUSEF_ALHASSAN.pdf",
  "1128822226": "SAUD_ABDULLAH.pdf",
  "1131640557": "ABDULAZIZ_ADEL_J.pdf",
  "1129656417": "MADYAN_AL_AMEER.pdf",
  "1133218006": "FAISAL_KHALID_M.pdf",
  "2245960899": "TURKI_MOHAMED.pdf",
  "1132633676": "WESAM_ABDULLAH.pdf",
  "1128994439": "ABDULRAHMAN.pdf",
  "1129500987": "HISHAM_FAHAD_S.pdf",
  "1121266926": "ABDULRHMAN_AWAD.pdf"
};

export default function TrainingFilePortal() {
  const [input, setInput] = useState("");
  const [matchedFile, setMatchedFile] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const file = traineeFiles[input.trim()];
    if (file) {
      setMatchedFile(file);
      setError("");
    } else {
      setMatchedFile(null);
      setError("الرقم التدريبي غير صحيح أو لا يوجد ملف مطابق.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold text-center">البحث عن ملف التدريب</h1>
      <Input
        placeholder="أدخل الرقم التدريبي"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button className="w-full" onClick={handleSearch}>
        عرض الملف
      </Button>

      {matchedFile && (
        <Card className="mt-4">
          <CardContent className="p-4 text-center">
            <p className="mb-2">تم العثور على الملف:</p>
            <a
              href={`/files/${matchedFile}`}
              className="text-blue-600 underline"
              download
            >
              تحميل {matchedFile.replace(".pdf", "")}
            </a>
          </CardContent>
        </Card>
      )}

      {error && <p className="text-red-600 text-center">{error}</p>}
    </div>
  );
}
