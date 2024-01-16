"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ForceGraph, {
  type ForceGraphMethods,
  type NodeObject,
} from "react-force-graph-3d";
import { languages } from "@/modules/data/programing-languages-data";
import type {
  LanguageLink,
  LanguageNode,
} from "@/modules/interfaces/languages-interface";

THREE.Cache.enabled= true

interface Props {
  animationTime?: number;
  heightPercent?: number;
}
export const Graph = ({ animationTime = 2000, heightPercent = 50 }: Props) => {
  const nodes = languages;
  const links = languages.flatMap(
    ({ id, relations }) =>
      relations?.map((relId) => ({ source: id, target: relId })) ?? []
  );
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => {
    setDisplayWidth(window.innerWidth);
    setDisplayHeight(window.innerHeight);
  });

  const fgRef = useRef<ForceGraphMethods<LanguageNode, LanguageLink>>();
  useEffect(() => {
    fgRef.current?.cameraPosition(
      {
        x: 129.94716157612126,
        y: -48.28320487507807,
        z: 35.33555120378469,
      },
      undefined, // lookAt ({ x, y, z })
      animationTime
    );
  }, [fgRef, animationTime]);
  const handleClick = useCallback(
    (node: NodeObject<LanguageNode>) => {
      const n = {
        x: node.x ?? 1,
        y: node.y ?? 1,
        z: node.z ?? 1,
      };
      // Aim at node from outside it
      const distance = 25;
      const distRatio = 1 + distance / Math.hypot(n.x, n.y, n.z);
      fgRef.current?.cameraPosition(
        {
          x: n.x * distRatio,
          y: n.y * distRatio,
          z: n.z * distRatio,
        }, // new position
        n, // lookAt ({ x, y, z })
        animationTime // ms transition duration
      );
    },
    [fgRef, animationTime]
  );
  const handleBackgroundClick = useCallback(() => {
    fgRef.current?.cameraPosition(
      {
        x: 129.94716157612126,
        y: -48.28320487507807,
        z: 35.33555120378469,
      },
      undefined, // lookAt ({ x, y, z })
      animationTime
    );
    console.log(fgRef.current?.camera().position);
  }, [fgRef, animationTime]);

  return (
    <ForceGraph
      showNavInfo={true}
      width={displayWidth - 20}
      linkWidth={.5}
      ref={fgRef}
      height={Math.max(500, (displayHeight / 100) * heightPercent)}
      nodeLabel={(property) =>
        languages.find(({ id }) => id === property.id)?.name ?? ""
      }
      // nodeVal={(property) =>
      //   languages.find(({ id }) => id === property.id)?.val ?? 2
      // }
      backgroundColor="rgba(0,0,0,0)"
      onNodeClick={handleClick}
      nodeColor={(property) =>
        languages.find(({ id }) => id === property.id)?.color ?? "#FC3050"
      }
      onBackgroundClick={handleBackgroundClick}
      nodeThreeObject={({ img, val }) => {
        const textureLoader = new THREE.TextureLoader();

        const imgTexture = textureLoader.load(`/imgs/dev_lang/${img}`);

        imgTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.SpriteMaterial({
          map: imgTexture,
          alphaTest: 0.5,
        });

        const sprite = new THREE.Sprite(material);

        sprite.scale.set(9 * (val ?? 0.7), 9 * (val ?? 0.7), 100);

        // Calcula el radio de la textura (suponiendo que la textura es circular)
        const radius = 0.8;

        // Crea la geometría circular y asigna al sprite
        const geometry = new THREE.CircleGeometry(radius);
        sprite.geometry = geometry;
        return sprite;
      }}
      nodeOpacity={1}
      nodeResolution={100}
      linkCurvature={0}
      linkCurveRotation={0}
      linkResolution={200}
      graphData={{
        nodes,
        links: links,
      }}
    />
  );
};
export default Graph;
