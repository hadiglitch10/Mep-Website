export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
      {/* Base architectural grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Ambient drifting gradients */}
      <div className="ambient-drift drift-delay-1 absolute top-1/4 -left-64 w-[50rem] h-[50rem] rounded-full bg-primary/5 pointer-events-none" />
      <div className="ambient-drift drift-delay-2 absolute bottom-0 -right-64 w-[60rem] h-[60rem] rounded-full bg-secondary/30 pointer-events-none" />
      
      {/* Gradient overlay to soften the grid towards the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
    </div>
  );
};
