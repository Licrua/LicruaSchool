function Main() {
  return (
    <>
  <div className="relative rounded-xl overflow-auto p-8">
  <a href="#" className="group block max-w-xs mx-auto rounded-lg p-4 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 
     hover:bg-sky-500 
     hover:ring-sky-500">
    <div className="flex items-center space-x-3">
     <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
     </svg>
     <h3 className="text-sm text-slate-900 font-semibold group-hover:text-white">New project</h3>
    </div>
    <p className="text-sm text-slate-500 group-hover:text-white">Create a new project from a variety of starting templates.</p>
 </a>
</div>
    </>
  );
}

export default Main;
