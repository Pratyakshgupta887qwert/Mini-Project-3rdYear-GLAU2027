// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Props {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [q, setQ] = useState('');

  return (
    <div className="relative max-w-md mx-auto mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={q}
        onChange={(e) => {
          const val = e.target.value;
          setQ(val);
          onSearch(val);
        }}
        placeholder="Search events..."
        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};