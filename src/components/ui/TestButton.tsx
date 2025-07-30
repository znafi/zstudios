"use client"

export default function TestButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => alert("Button clicked!")}
    >
      Test Click
    </button>
  )
}
