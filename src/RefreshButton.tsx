interface RefreshButtonProps {
  onRefresh: () => void;
}

export default function RefreshButton({ onRefresh }: RefreshButtonProps) {
  return (
    <div className="mb-4">
      <button
        onClick={onRefresh}
        className="bg-yellow-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
      >
        Refresh
      </button>
    </div>
  );
}
