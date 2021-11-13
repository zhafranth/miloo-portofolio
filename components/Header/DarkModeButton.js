const DarkModeButton = ({ toggle, mode }) => {
  return (
    <div
      className={`w-14 h-7 rounded-full p-1 relative cursor-pointer ml-8 flex transition-all duration-1000 hover:shadow-xl ${
        mode
          ? "bg-gradient-to-tr from-[#6D85C3] via-[#6D85C3] to-[#334163]"
          : "bg-gradient-to-tl from-[#FFE9AF] via-[#DCE6FF] to-[#DCE6FF]"
      }`}
      onClick={toggle}
    >
      <div
        className={`h-full w-5 bg-blue-300 rounded-full transition-all duration-500 ${
          mode ? "ml-7" : "ml-0"
        }`}
      >
        <img
          src={mode ? "/assets/mode-dark.png" : "/assets/mode-light.png"}
          alt="mode"
          className="transition-all"
        />
      </div>
    </div>
  );
};

export default DarkModeButton;

// bg-gradient-to-tl from-[#FFE9AF] via-[#DCE6FF] to-[#DCE6FF]
