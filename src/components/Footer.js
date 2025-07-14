// Footer.js
export default function Footer() {
    return (
        <footer className="p-10 bg-emerald-200 flex justify-center">
            <p className="font-bold text-center">
                © {new Date().getFullYear()} Kunal Nepali. All rights reserved.
            </p>
        </footer>
    );
}
