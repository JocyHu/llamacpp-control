import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Trash2 } from 'lucide-react';
import { Profile } from '../types';
import { cn } from '../App';

interface Props {
  profile: Profile;
  isActive: boolean;
  onSelect: (id: string | null) => void;
  onDelete: (id: string) => void;
}

export function SortableProfileItem({ profile, isActive, onSelect, onDelete }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: profile.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={() => onSelect(profile.id)}
      className={cn(
        "group flex items-center gap-3 px-4 h-12 rounded-ios-item cursor-grab transition-all relative",
        isActive 
          ? "bg-[#0A84FF]/10 text-[#0A84FF] shadow-sm" 
          : "hover:bg-white/5 text-muted-foreground hover:text-foreground",
        isDragging && "opacity-50 scale-105 shadow-2xl z-50 cursor-grabbing bg-white/10"
      )}
    >
      {isActive && (
        <div className="absolute left-0 w-1 h-6 bg-[#0A84FF] rounded-r-full" />
      )}
      <Box className={cn("w-4 h-4 shrink-0", isActive ? "text-[#0A84FF]" : "text-muted-foreground")} />
      <span className="truncate text-xs font-bold flex-1 select-none">{profile.name}</span>
      <button 
        onClick={(e) => { e.stopPropagation(); onDelete(profile.id); }} 
        className="opacity-0 group-hover:opacity-100 hover:text-destructive transition-opacity"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
