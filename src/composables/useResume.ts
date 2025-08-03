import resumePDF from '../assets/0654test-Rizky Haffiyan Roseno-CV.pdf'

export const openResumeInNewTab = () => {
  window.open(resumePDF, '_blank')
}

export const downloadResume = () => {
  const link = document.createElement('a')
  link.href = resumePDF
  link.download = 'Rizky_Haffiyan_Roseno_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const getResumeUrl = () => {
  return resumePDF
}
