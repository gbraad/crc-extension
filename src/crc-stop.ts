/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { commander } from './daemon-commander';
import { crcLogProvider } from './log-provider';

export async function stopCrc(): Promise<void> {
  console.log('extension:crc: receive the call stop');
  try {
    await commander.stop();
    crcLogProvider.stopSendingLogs();
  } catch (err) {
    console.error(err);
  }
}
