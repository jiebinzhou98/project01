export default function Footer() {
    return (
      <footer className="bg-gray-100 border-t border-gray-300 py-4 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  