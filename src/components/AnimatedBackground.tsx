export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating blobs */}
      <div className="blob blob-delay-1 absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10" />
      <div className="blob blob-delay-2 absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-orange-glow/5" />
      <div className="blob blob-delay-3 absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-primary/5" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    </div>
  );
};
