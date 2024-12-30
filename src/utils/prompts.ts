export const promptEx = [
  'Enchanted forest, glowing trees, twilight, fairies, magical light, waterfall, mystical creatures',
  'Neon-lit cityscape, skyscrapers, busy streets, dusk, cyberpunk, futuristic, LED billboards',
  'Medieval village, cobblestone streets, cottages, lanterns, market, historical, rustic',
  'Astronaut in space, Earth background, stars, galaxies, isolation, debris, realistic cosmos',
  'Snowy mountain cabin, pine trees, cozy lights, snowfall, smoke from chimney, serene, winter landscape',
  'Desert oasis, palm trees, clear water, sand dunes, sunset, camels, tranquil, warm colors',
  'Retro futuristic city, neon lights, flying cars, 80s aesthetic, skyscrapers, vibrant colors, synthwave',
  'Traditional Asian garden, koi pond, stone lanterns, cherry blossoms, bridge, bamboo trees, tranquil, Zen atmosphere',
];

export function getRandomPrompt(): string {
  const randomIndex = Math.floor(Math.random() * promptEx.length);
  return promptEx[randomIndex];
}