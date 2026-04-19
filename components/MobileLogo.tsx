import { ToothIcon } from "./LogoHead";

const MobileLogo = () => {
  return (
    <div className="lg:hidden flex items-center gap-2 mb-10">
      <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
        <ToothIcon className="w-4 h-4 text-white" />
      </div>
      <span className="text-sky-700 dark:text-sky-400 font-semibold text-base tracking-wide">
        DentaCare
      </span>
    </div>
  );
}
export default MobileLogo