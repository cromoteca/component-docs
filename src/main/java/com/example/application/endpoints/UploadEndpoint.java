package com.example.application.endpoints;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class UploadEndpoint {

    public void upload(@Nonnull String filename, byte @Nonnull [] data) {
        System.out.format("Uploaded `%s`: %d bytes\n", filename, data.length);
    }
}
