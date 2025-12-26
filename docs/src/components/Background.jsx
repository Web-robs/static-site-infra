const Background = () => {
  return (
    <div className="fixed inset-0 -z-20">
      <div className="absolute inset-0 bg-[#0b0616]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b3b] via-[#0b0616] to-[#0b0616]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.14),_transparent_55%),radial-gradient(ellipse_at_center,_rgba(145,94,255,0.28),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.10),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
};

export default Background;
