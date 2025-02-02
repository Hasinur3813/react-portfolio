const ProjectModal = ({ selectedProject }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        {/* modal title */}
        <h3 className="font-bold text-primaryColor text-lg mb-4">
          Choose a repository below
        </h3>

        {/* repository link */}
        {/* client */}
        <p className="py-2">
          <span className="font-semibold text-base inline-block">Client: </span>{" "}
          <a
            className="link text-blue-500"
            href={selectedProject?.github?.client}
            target="_blank"
          >
            {selectedProject?.github?.client}
          </a>
        </p>
        {/* server */}
        <p>
          <span className="font-semibold text-base inline-block">Server: </span>{" "}
          <a
            className="link text-blue-500"
            href={selectedProject?.github?.server}
            target="_blank"
          >
            {selectedProject?.github?.server}
          </a>
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ProjectModal;
