// We define the empty imports so the auto-complete feature works as expected.
import { Vector3 } from '@dcl/sdk/math'
import { Animator, AudioSource, AvatarAttach, GltfContainer, Material, Transform, VideoPlayer, VisibilityComponent, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'

import { changeColorSystem, circularSystem } from './systems'
import { setupUi } from './ui'

// You can remove this if you don't use any asset packs
initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer,
  Material,
  VideoPlayer
})

export function main() {
  // Defining behavior. See `src/systems.ts` file.
  engine.addSystem(circularSystem)
  engine.addSystem(changeColorSystem)

  // draw UI. Here is the logic to spawn cubes.
  setupUi()

  let avocado = engine.addEntity()

  GltfContainer.create(avocado, {
    src: 'models/Avocado.glb',
  })

  Transform.create(avocado, {
    position: Vector3.create(3, 1, 3),
  })
}
