import { mkdir, cp, rm } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { readdir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

const deployDir = join(rootDir, 'deploy-dist')
const distDir = join(rootDir, 'dist')
const targetDir = join(deployDir, '1st_site', 'version_2')

async function copyRecursive(src, dest) {
  const entries = await readdir(src, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    
    if (entry.isDirectory()) {
      await mkdir(destPath, { recursive: true })
      await copyRecursive(srcPath, destPath)
    } else {
      await cp(srcPath, destPath)
    }
  }
}

async function prepareDeploy() {
  try {
    console.log('📦 Подготовка файлов для деплоя...')
    
    // Удаляем старую папку deploy-dist если есть
    if (existsSync(deployDir)) {
      await rm(deployDir, { recursive: true, force: true })
    }

    // Проверяем наличие dist
    if (!existsSync(distDir)) {
      console.error('❌ Папка dist не найдена! Запустите npm run build сначала.')
      process.exit(1)
    }

    // Создаем структуру папок
    await mkdir(targetDir, { recursive: true })

    // Копируем все файлы из dist в deploy-dist/1st_site/version_2/
    await copyRecursive(distDir, targetDir)
    
    console.log('✅ Файлы подготовлены для деплоя в подпапку: 1st_site/version_2/')
    console.log(`📁 Файлы находятся в: ${targetDir}`)
  } catch (error) {
    console.error('❌ Ошибка при подготовке деплоя:', error)
    process.exit(1)
  }
}

prepareDeploy()
