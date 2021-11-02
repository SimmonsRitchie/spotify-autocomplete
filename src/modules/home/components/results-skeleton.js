import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ResultsSkeleton = () => {
  return (
    <SkeletonTheme baseColor={"#e0e0e0"} duration={0.9}>
      <section className="w-full">
        <Skeleton
          containerClassName="flex justify-center gap-6 block mb-8"
          inline
          rectangle
          count={3}
          height={36}
          width={80}
          borderRadius={"1.25rem"}
        />
        <Skeleton reactangle height={400} count={3} className="mb-4" />
      </section>
    </SkeletonTheme>
  );
};

export default ResultsSkeleton;
