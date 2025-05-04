// import React from "react";

// const Loading = () => {
//   return (
//     <div className="flex flex-wrap w-[162px] h-[162px]">
//       {/* Cells with inline styles for animation */}
//       {[
//         { delay: "0ms", color: "#00FF87" },
//         { delay: "100ms", color: "#0CFD95" },
//         { delay: "200ms", color: "#17FBA2" },
//         { delay: "100ms", color: "#23F9B2" },
//         { delay: "200ms", color: "#30F7C3" },
//         { delay: "300ms", color: "#3DF5D4" },
//         { delay: "200ms", color: "#45F4DE" },
//         { delay: "300ms", color: "#53F1F0" },
//         { delay: "400ms", color: "#60EFFF" },
//       ].map((cell, index) => (
//         <div
//           key={index}
//           className="w-[52px] h-[52px] m-[1px] rounded bg-transparent"
//           style={
//             {
//               animation: `1.5s ease infinite ${cell.delay} ripple`,
//               "--cell-color": cell.color,
//             } as React.CSSProperties
//           }
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Loading;
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-40 flex items-start justify-center pt-10">
      <div className="flex flex-wrap w-[162px] h-[162px]">
        {[
          { delay: "0ms", color: "#00FF87" },
          { delay: "100ms", color: "#0CFD95" },
          { delay: "200ms", color: "#17FBA2" },
          { delay: "100ms", color: "#23F9B2" },
          { delay: "200ms", color: "#30F7C3" },
          { delay: "300ms", color: "#3DF5D4" },
          { delay: "200ms", color: "#45F4DE" },
          { delay: "300ms", color: "#53F1F0" },
          { delay: "400ms", color: "#60EFFF" },
        ].map((cell, index) => (
          <div
            key={index}
            className="w-[52px] h-[52px] m-[1px] rounded bg-transparent"
            style={
              {
                animation: `1.5s ease infinite ${cell.delay} ripple`,
                "--cell-color": cell.color,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;