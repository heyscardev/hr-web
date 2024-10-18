import { Modal } from "@/components";
import { useGraphModalStore } from "../stores/graphModal";
import { Divider, useTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { languages } from "@/modules/data/programing-languages-data";
import { MdQueryBuilder, MdScreenshotMonitor } from "react-icons/md";
import { LuServerCog, LuWallpaper } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { SkillChip } from "./SkillChip";
import clsx from "clsx";
import { FaX } from "react-icons/fa6";

interface Props {
  onClose?: () => void;
}
export const LanguageModal = ({ onClose }: Props) => {
  const { languageId, setOpen, open } = useGraphModalStore();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const selectedPlanet = useMemo(
    () => languages.find((value) => value.id === languageId),
    [languageId]
  );
  return (
    <Modal
      open={open}
      onClose={onClose ?? (() => setOpen(false))}
      maxWidth="lg"
      keepMounted={false}
      fullScreen={fullScreen}
      hideBackdrop
      PaperProps={{
        style: {
          backgroundColor: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(100px)",
        },
      }}
      disablePadding
    >
      <div
        className="   flex-1 min-h-[100%] h-full
        flex flex-col-reverse justify-end
        md:grid md:grid-cols-2 md:grid-rows-1 m-0 gap-4 md:bg-gradient--circle-horizontal bg-gradient--circle-vertical 
   
        "

        // style={{
        //   background:
        //     "radial-gradient(circle at right, transparent 50%, #ffffff 50%)",
        //   //"radial-gradient(circle at 90% 50%, transparent 45%, #ffffff 45%)",
        // }}
      >
        <button
          onClick={onClose}
          className="absolute top-2         right-2 p-2 rounded-lg hover:shadow-lg"
        >
          <FaX size={20} />
        </button>
        <div className="px-2 pb-2 md:p-4 flex flex-col  ">
          <div className="flex items-center mb-2">
            {selectedPlanet && (
              <Image
                width={100}
                height={100}
                className=" drop-shadow-md rounded"
                src={
                  selectedPlanet?.logo
                    ? `/imgs/languages_logos/${selectedPlanet?.logo}`
                    : `/imgs/dev_lang/${selectedPlanet?.img}`
                }
                alt={`${selectedPlanet?.name}-logo`}
              />
            )}
            <div className="flex flex-col ml-3 ">
              <h3 className="text-3xl font-semibold text-scondary-950 ">
                {selectedPlanet?.name}
              </h3>
              <h6 className="text-lg m-0 p-0 font-semibold text-slate-300 ">
                {selectedPlanet?.large_name}
              </h6>
            </div>
          </div>
          <Divider className="bg-orange-200" />
          <div className="flex items-end my-3 gap-4">
            {selectedPlanet?.skills.map((skill, index) => (
              <SkillChip
                key={index}
                title={skill.title}
                content={skill.content}
              />
            ))}
          </div>
          <span className=" my-2 text-slate-500  mx-1">
            {selectedPlanet?.description}
          </span>

          <div className="flex flex-1  mt-6  flex-col items-center gap-y-1 justify-center border-gray-300 rounded-sm bg-neutral-50 border aspect-video self-center">
            <span className="text-lg text-center w-full text-gray-500">
              Proyectos
            </span>

            <span className="text-gray-400 text-center text-wrap max-w-80">
              Estamos Trabando en esta parte del sitio para brindarte una mejor
              experiencia.
            </span>
            <MdQueryBuilder size={40} className="text-gray-400 mt-4" />
            {/* <ProjectCard project={null} />
              <ProjectCard project={null} /> */}
          </div>
        </div>

        <div className=" flex items-center justify-center">
          {selectedPlanet?.img && (
            <Image
              onClick={fullScreen ? onClose : () => {}}
              width={800}
              height={800}
              fetchPriority="high"
              className={clsx(" object-contain w-[200px] md:w-auto", {
                "cursor-pointer": fullScreen,
              })}
              src={"/imgs/dev_lang/" + selectedPlanet?.img}
              alt={`${selectedPlanet?.name}-planet`}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
