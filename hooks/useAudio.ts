"use client";
import { useCallback, useEffect, useRef } from "react";

export function useAudio() {
  const powerAudioRef = useRef<HTMLAudioElement | null>(null);
  const redirectAudioRef = useRef<HTMLAudioElement | null>(null);
  const dropletAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Safely preload audio resources on component mount
    powerAudioRef.current = new Audio("/sounds/mixkit-casino-bling-achievement-2067.wav");
    powerAudioRef.current.volume = 0.5;

    redirectAudioRef.current = new Audio("/sounds/universfield-retro-game-shot-152052.mp3");
    redirectAudioRef.current.volume = 0.4;

    dropletAudioRef.current = new Audio("/sounds/button-ui.mp3");
    dropletAudioRef.current.volume = 0.3;
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
      if (dropletAudioRef.current) {
        dropletAudioRef.current.currentTime = 0;
        dropletAudioRef.current.play().catch(console.error);
      }
    } catch (e) {}
  }, []);

  return { playDroplet, playPowerOn, playRedirect };
}
