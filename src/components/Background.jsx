import Beams from '../constants/Beams';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <Beams
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />
    </div>
  );
};

export default Background;
