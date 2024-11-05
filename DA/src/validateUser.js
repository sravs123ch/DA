import React, { useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { Fingerprint } from "lucide-react";

const ValidateUser = () => {
  const [fingerprint, setFingerprint] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateFingerprint = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Initialize FingerprintJS and get the fingerprint
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      // Extract the visitorId (unique fingerprint ID)
      setFingerprint(result.visitorId);
    } catch (error) {
      setError("Error generating device fingerprint");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Device Fingerprint Generator</h2>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <Fingerprint
              size={64}
              className={`text-blue-500 ${isLoading ? "animate-pulse" : ""}`}
            />
          </div>

          <button
            onClick={generateFingerprint}
            disabled={isLoading}
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating...
              </span>
            ) : (
              "Generate Device Fingerprint"
            )}
          </button>

          {fingerprint && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">
                Your Device Fingerprint:
              </p>
              <p className="font-mono text-sm break-all text-gray-900">
                {fingerprint}
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValidateUser;
