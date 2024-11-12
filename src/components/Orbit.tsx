import React from "react";

interface OrbitProps {
  size: number;
}

const Orbit: React.FC<OrbitProps> = ({ size }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 isolate -z-10">
      <div
        style={{ width: size, height: size }}
        className="border border-[var(--color-border)] rounded-full"
      ></div>
    </div>
  );
};

export default Orbit;
