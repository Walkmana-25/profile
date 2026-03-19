import { NavbarContents } from "./NavbarContents";

export const MobileDrawer = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="fixed inset-y-0 left-0 w-80 min-h-full bg-base-200">
        <NavbarContents className="menu p-4 w-full" />
      </div>
    </div>
  );
};
