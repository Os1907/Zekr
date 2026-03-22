'use client';
import React, { useRef, useState } from 'react';
import { Cairo } from 'next/font/google'
import { Play, Pause } from 'lucide-react'

const cairo = Cairo({ subsets: ['arabic'], weight: ['600', '700'] })

interface IAudio {
  audio: {
    name: string;
    audio_url: string;
  };
}

const reciters: Record<string, string> = {
  "Mishari Rashid al-`Afasy": "مشاري راشد العفاسي",
  "Abdur-Rahman as-Sudais":   "عبد الرحمن السديس",
  "Sa`ud ash-Shuraym":        "سعود الشريم",
}

export default function AudioPlayer({ audio }: IAudio) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying]     = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]       = useState(0);

  const displayName = reciters[audio.name] ?? audio.name;

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`${cairo.className}`}
      style={{
        background: 'var(--color-surface)',
        border: `1px solid ${isPlaying ? 'var(--color-accent)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius)',
        padding: '12px 14px',
        transition: 'border-color .2s',
      }}>
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onEnded={() => setIsPlaying(false)}
        src={audio.audio_url}
      />

      <div className="flex items-center gap-3">
        {/* play/pause button */}
        <button onClick={togglePlay}
          className="w-9 h-9 flex items-center justify-center shrink-0 transition-opacity hover:opacity-75"
          style={{
            borderRadius: 'var(--radius)',
            background: isPlaying ? 'var(--color-accent)' : 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            color: isPlaying ? '#fff' : 'var(--color-accent)',
          }}>
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* reciter name */}
        <p className="text-sm font-bold flex-1" style={{ color: 'var(--color-text)' }}>
          {displayName}
        </p>

        {/* time */}
        {isPlaying && (
          <span className="text-xs font-bold tabular-nums shrink-0" style={{ color: 'var(--color-text-muted)' }}>
            {fmt(currentTime)} / {fmt(duration)}
          </span>
        )}
      </div>

      {/* thin progress bar */}
      {isPlaying && (
        <div className="mt-3 relative" style={{ height: 3, borderRadius: 99, background: 'var(--color-border)' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: 'var(--color-accent)', borderRadius: 99, transition: 'width .1s linear' }} />
          <input type="range" min={0} max={duration} value={currentTime}
            onChange={e => {
              if (audioRef.current) {
                audioRef.current.currentTime = e.target.valueAsNumber;
                setCurrentTime(e.target.valueAsNumber);
              }
            }}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
            style={{ height: '100%' }}
          />
        </div>
      )}
    </div>
  );
}