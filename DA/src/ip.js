import { useState, useEffect } from "react";
// import { Loader2 } from "lucide-react";
const IPAddressDisplay = () => {
  const [ipInfo, setIPInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/ip");
        if (!response.ok) {
          throw new Error("Failed to fetch IP information");
        }
        const data = await response.json();
        setIPInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchIP();
  }, []);
  return (
    <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
      {" "}
      <div className="mb-4 border-b pb-2">
        {" "}
        <h2 className="text-lg font-bold">IP Address Information</h2>{" "}
      </div>{" "}
      <div>
        {" "}
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
            {" "}
            {/* <Loader2 className="h-6 w-6 animate-spin" />{" "} */}
            <span>Loading IP information...</span>{" "}
          </div>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <div className="space-y-4">
            {" "}
            <div>
              {" "}
              <div className="text-sm text-gray-500">IPv4 Address</div>{" "}
              <div className="text-lg font-medium">
                {ipInfo?.ipv4 || "192.168.1.1"}
              </div>{" "}
            </div>{" "}
            {ipInfo?.ipv6 && (
              <div>
                {" "}
                <div className="text-sm text-gray-500">IPv6 Address</div>{" "}
                <div className="text-lg font-medium">
                  {ipInfo?.ipv6 || "2001:db8::ff00:42:8329"}
                </div>{" "}
              </div>
            )}{" "}
            <div>
              {" "}
              <div className="text-sm text-gray-500">Network Type</div>{" "}
              <div className="text-lg font-medium">
                {" "}
                {ipInfo?.isPrivate ? "Private Network" : "Public Network"}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <div className="text-sm text-gray-500">
                Subnet Information
              </div>{" "}
              <div className="text-lg font-medium">
                {" "}
                Network Address:{" "}
                {ipInfo?.subnet?.networkAddress || "192.168.1.0"} <br />{" "}
                Broadcast Address:{" "}
                {ipInfo?.subnet?.broadcastAddress || "192.168.1.255"}{" "}
              </div>{" "}
            </div>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default IPAddressDisplay;
