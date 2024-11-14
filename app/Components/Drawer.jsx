const Drawer = ({ isOpen, toggleDrawer, children }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-screen bg-white transition-transform transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      } z-40`}
    >
      <div className="flex justify-between items-center p-4">
        <button
          onClick={toggleDrawer}
          className="flex justify-start py-1 w-6 h-6 text-[#464646] rounded-full"
        >
          &times;
        </button>
        <div>
          <p className="font-bold text-[16px] text-[#464646]">جزییات پرواز</p>
        </div>
      </div>
      <hr />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;
