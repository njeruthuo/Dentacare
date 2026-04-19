import Link from "next/link";

const LogoHead = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center shadow-sm">
          <ToothIcon className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-slate-800 dark:text-slate-100 tracking-wide">
          DentaCare
        </span>
      </div>
    </Link>
  );
};
export default LogoHead;

export function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3 11C4 13 4 15 4.5 17C5 19 6 22 7.5 22C9 22 9.5 20 10 18.5C10.5 17 11 16 12 16C13 16 13.5 17 14 18.5C14.5 20 15 22 16.5 22C18 22 19 19 19.5 17C20 15 20 13 21 11C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
    </svg>
  );
}