import express from 'express';
import { renderApplication } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  server.use(express.static(browserDistFolder, { maxAge: '1y' }));

  server.get('*', async (req, res, next) => {
    try {
      const html = await renderApplication(bootstrap, {
        url: req.url,
        document: '<app-root></app-root>',
        platformProviders: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl || '/' }
        ]
      });

      res.send(html);
    } catch (err: unknown) {
      next(err);
    }
  });

    return server;
  }

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
  });
}

run();