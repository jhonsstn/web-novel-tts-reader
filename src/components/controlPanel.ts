import browser from 'webextension-polyfill';
import { circleArrowLeft, circleArrowRight, circlePause, circleStop } from '../lib/svgs';

export async function createControlPanel(isLoading = true): Promise<HTMLElement> {
	const settings = await browser.storage.sync.get({
		darkMode: false,
	});

	const panel = document.createElement('div');
	panel.className = 'etts-tts-controls';
	panel.id = 'tts-control-panel';

	if (settings.darkMode) {
		panel.dataset.theme = 'dark';
	}

	updatePanelContent(panel, isLoading);
	document.body.appendChild(panel);
	return panel;
}

export function updatePanelContent(panel: HTMLElement, isLoading: boolean): void {
	panel.innerHTML = `
		${isLoading ? `
			<div class="etts-flex-center etts-loading-container">
				<span>Generating audio...</span>
				<div class="etts-loading-spinner"></div>
			</div>
		` : `
			<div class="etts-flex-center">
				<button id="tts-prev-paragraph" class="etts-tts-button">
					${circleArrowLeft}
					<span>Prev</span>
				</button>
				<button id="tts-pause" class="etts-tts-button">
					${circlePause}
					<span>Pause</span>
				</button>
				<button id="tts-stop" class="etts-tts-button etts-red">
					${circleStop}
					<span>Stop</span>
				</button>
				<button id="tts-next-paragraph" class="etts-tts-button">
					${circleArrowRight}
					<span>Next</span>
				</button>
			</div>
		`}
	`;

	if (!isLoading) {
		const previousParagraphButton = panel.querySelector('#tts-prev-paragraph');
		const pauseButton = panel.querySelector('#tts-pause');
		const stopButton = panel.querySelector('#tts-stop');
		const nextParagraphButton = panel.querySelector('#tts-next-paragraph');


		if (previousParagraphButton) previousParagraphButton.addEventListener('click', () => {
			(window as any).previousParagraph?.();
		});


		if (pauseButton) pauseButton.addEventListener('click', () => {
			(window as any).togglePause?.();
		});


		if (stopButton) stopButton.addEventListener('click', () => {
			(window as any).stopPlayback?.();
		});


		if (nextParagraphButton) nextParagraphButton.addEventListener('click', () => {
			(window as any).nextParagraph?.();
		});
	}
}
