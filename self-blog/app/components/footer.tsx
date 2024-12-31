export default function Foooter() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  