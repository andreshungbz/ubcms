import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/*Header*/}
                <div className="mb-6 text-center">
                    
                    {/* Logo */}
                    <div className="mb-3">
                        <Image
                        src="/logo1.png"
                        alt="UBCMS Logo"
                        width={200}
                        height={60}
                        className="mx-auto"
                        priority
                        />
                    </div>
                    {/* title */}
                    <h1 className="text-2xl font-semibold tracking-tight">UB Clubs</h1>
                    {/* subtitle */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sign in to manage your clubs and events</p>
                    </div>
                {/*Card*/}
                <div className="rounded-2xl border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
                    <form className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium" htmlFor="email">
                                UB Email
                            </label>
                                
                            <input
                                id="email"
                                type="email"
                                placeholder="name@ub.edu.bz"
                                className="h-11 w-full rounded-xl border bg-white dark:bg-neutral-900 px-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
                            />
                            <p>Only UB Email Accounts are allowed</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium" htmlFor="password">
                                    Password
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-foreground underline underline-offset-4"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="************"
                                className="h-11 w-full rounded-xl border bg-white dark:bg-neutral-900 px-3 text-sm outline-none focus:ring-2 focus:ring-black/20"
                                autoComplete="current-password"
                            />
                        </div>
                        <button
                            type="button"
                            className="h-11 w-full rounded-xl bg-[#7A2E8E] text-white text-sm font-medium hover:bg-[#BF77F6] dark:hover:bg-[#CBC3E3] transition"
                        >
                            Sign In
                        </button>
                        {/** Divider */}
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t"/> 
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white dark:bg-neutral-900 px-3 text-xs text-gray-600 dark:text-gray-400">OR</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="h-11 w-full rounded-xl border border-[#7A2E8E] bg-white dark:bg-neutral-900 text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition flex items-center justify-center gap-2"
                        >
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#7A2E8E] text-[#7A2E8E] text-[10px] font-semibold">
                                G
                            </span>
                            Continue with Google
                        </button>
                    </form>
                    <p className="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account? {""}
                        <Link
                            href="/register"
                            className="hover:text-gray-900 dark:hover:text-gray-100 font-medium underline underline-offset-4"
                        >
                            Create One
                        </Link>
                    </p>
                </div>
                <p className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
                    By signing in you agree to UB Clubs usage policy
                </p>
            </div>
        </div>
    );
}