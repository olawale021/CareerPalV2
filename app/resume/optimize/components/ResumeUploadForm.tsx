import { FormEvent, RefObject } from "react";

interface ResumeUploadFormProps {
  file: File | null;
  setFile: (file: File | null) => void;
  jobDescription: string;
  setJobDescription: (description: string) => void;
  isScoring: boolean;
  fileInputRef: RefObject<HTMLInputElement>;
  onSubmit: (e: FormEvent) => void;
}

export default function ResumeUploadForm({
  file,
  setFile,
  jobDescription,
  setJobDescription,
  isScoring,
  fileInputRef,
  onSubmit,
}: ResumeUploadFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
          Upload Resume
        </label>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx,.odt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text"
          onChange={e => setFile(e.target.files?.[0] || null)}
          ref={fileInputRef}
          className="block w-full text-black text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border rounded-md"
        />
      </div>
      <div className="relative">
        <label htmlFor="jobDescription" className="block text-base font-medium text-gray-800 mb-2">
          Job Description
        </label>
        <div className="relative" style={{ fontFamily: 'Times New Roman', color: 'black' }} >
          <textarea
            id="jobDescription"
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            rows={6}
            className="block w-full rounded-md border-2 border-blue-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 bg-blue-50/30"
          />
          {!jobDescription && (
            <div className="absolute top-0 left-0 right-0 pointer-events-none p-3 text-sm text-gray-500">
              <p className="font-medium text-blue-600 mb-1">💼 Enter Job Description</p>
              <p className="text-gray-600">For best results, include:</p>
              <ul className="list-disc pl-5 text-xs space-y-1 mt-1 text-gray-500">
                <li>Job title & required skills</li>
                <li>Responsibilities & qualifications</li>
                <li>Company details</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        disabled={isScoring || !file || !jobDescription}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isScoring ? "Scoring..." : "Score Resume"}
      </button>
    </form>
  );
} 