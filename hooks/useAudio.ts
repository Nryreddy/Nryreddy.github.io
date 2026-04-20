"use client";
import { useCallback, useEffect, useRef } from "react";

export function useAudio() {
  const powerAudioRef = useRef<HTMLAudioElement | null>(null);
  const redirectAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Safely preload audio resources on component mount
    powerAudioRef.current = new Audio("/sounds/mixkit-casino-bling-achievement-2067.wav");
    powerAudioRef.current.volume = 0.5;

    redirectAudioRef.current = new Audio("/sounds/universfield-retro-game-shot-152052.mp3");
    redirectAudioRef.current.volume = 0.4;
  }, []);

  const playPowerOn = useCallback(() => {
    try {
      if (powerAudioRef.current) {
        powerAudioRef.current.currentTime = 0;
        powerAudioRef.current.play().catch(console.error);
      }
    } catch (e) {}
  }, []);

  const playRedirect = useCallback(() => {
    try {
      if (redirectAudioRef.current) {
        redirectAudioRef.current.currentTime = 0;
        redirectAudioRef.current.play().catch(console.error);
      }
    } catch (e) {}
  }, []);

  const playDroplet = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Simulate drop sound (frequency sweep)
      const now = ctx.currentTime;
      osc.type = "sine";
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      
      // Volume envelope (quick attack, quick decay)
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.5, now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      
      osc.start(now);
      osc.stop(now + 0.1);
    } catch (err) {
      console.error("Audio context failed", err);
    }
  }, []);

  return { playDroplet, playPowerOn, playRedirect };
}
