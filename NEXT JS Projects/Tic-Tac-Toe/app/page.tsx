import Board from '../components/Board';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-800 max-w-md w-full">
        {/* High contrast title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 underline decoration-blue-500">
          Tic Tac Toe
        </h1>
        <Board />
      </div>
    </main>
  );
}
