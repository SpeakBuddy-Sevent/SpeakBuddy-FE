export default function LoadingPopup() {
  return (
    <div className="bg-white h-screen">
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white px-6 py-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mb-3"></div>
            <p className="text-gray-700 font-medium">Loading...</p>
        </div>
        </div>
    </div>
  );
}
